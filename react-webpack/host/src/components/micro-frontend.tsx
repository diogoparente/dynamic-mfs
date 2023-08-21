import { useMicrofrontend } from "../context/micro-frontends.context";
import useDynamicComponent from "../hooks/use-dynamic-component";

const Microfrontend = ({
  url,
  microId = "remote",
}: {
  microId: string;
  url: string;
}) => {
  const microfrontend = useMicrofrontend({ id: microId });
  const scope = microfrontend.scope;

  // const version = microfrontend.version
  // TODO - change url value to consume the version
  const Component = useDynamicComponent({
    url,
    scope,
    module: "./App",
  });

  return Component ? Component : null;
};

export default Microfrontend;
