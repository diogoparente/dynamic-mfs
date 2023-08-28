import { useMicrofrontend } from "../context/micro-frontends.context";
import useDynamicComponent from "../hooks/use-dynamic-component";

const Microfrontend = ({ microId }: { microId: string }) => {
  const microfrontend = useMicrofrontend({ id: microId });
  if (!microfrontend) {
    return null;
  }

  const { scope, version } = microfrontend;

  const Component = useDynamicComponent({
    scope,
    version,
  });

  return Component ?? null;
};

export default Microfrontend;
