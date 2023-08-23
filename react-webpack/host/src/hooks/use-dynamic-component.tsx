import React, { Suspense, lazy, useEffect, useState } from "react";

export interface ModuleProps {
  scope: string;
  version: string;
  module: string;
  props?: any;
}

const MFES_BUCKET_URL = process.env.REACT_APP_MICROFRONTEND_BUCKET;
const BASE_FILENAME = "remoteEntry.js";
const FALLBACK_MSG = "Oh no, something went wrong";
const isDev = Boolean(process.env.NODE_ENV === "development");

const loadComponent = ({
  scope,
  module,
}: Omit<ModuleProps, "url" | "version">) => {
  return async () => {
    // Initializes the share scope. This fills it with known provided
    // modules from this build and all remotes
    await __webpack_init_sharing__("default");
    const container = window[scope];
    // or get the container somewhere else
    // Initialize the container, it may provide shared modules
    await container.init(__webpack_share_scopes__.default);
    const factory = await window[scope].get(module);
    const Module = factory();
    return Module;
  };
};

const buildSrcUrl = ({ version, scope }: Omit<ModuleProps, "module">) =>
  !isDev
    ? `${MFES_BUCKET_URL}/${scope}/${version}/${scope}-${BASE_FILENAME}`
    : `${MFES_BUCKET_URL}/${BASE_FILENAME}`;

const useDynamicScript = ({ version, scope }: Omit<ModuleProps, "module">) => {
  const srcUrl = buildSrcUrl({ version, scope });
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const element = document.createElement("script");

    element.src = srcUrl;
    element.type = "text/javascript";
    element.async = true;

    setReady(false);
    setFailed(false);

    element.onload = () => setReady(true);

    element.onerror = () => {
      console.error(`Dynamic Script Error: ${srcUrl}`);
      setReady(false);
      setFailed(true);
    };

    document.head.appendChild(element);

    return () => {
      document.head.removeChild(element);
    };
  }, [srcUrl]);

  return {
    ready,
    failed,
  };
};

const ModuleLoader = ({ version, module, scope, props }: ModuleProps) => {
  // custom hook to append our target script
  // to the document's head
  const { ready, failed } = useDynamicScript({
    version,
    scope,
  });

  if (!ready) {
    return null;
  }

  if (failed) {
    return <h2>{FALLBACK_MSG}</h2>;
  }

  // now that the script is successfully appended, we can build our MFE
  const Component = lazy(loadComponent({ scope, module }));

  return (
    <Suspense fallback={FALLBACK_MSG}>
      <Component {...props} />
    </Suspense>
  );
};

const useDynamicComponent = (remote: ModuleProps) => (
  <ModuleLoader {...remote} />
);

export default useDynamicComponent;
