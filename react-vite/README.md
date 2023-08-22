# @dynamic-mfs/react-vite

### Intro

This example demos consumption of federated modules from a vite bundle. `host` (react based) depends on a component exposed by `remote` app (react based).

### Instructions

Install `pnpm` as per instructions provided [here](https://pnpm.io/installation)

Run `pnpm install`, then `pnpm start`. This will build and serve both `host` and `remote` on ports 3000, 3001 respectively.

- HOST: [localhost:3000](http://localhost:3000/)
  - REMOTE in HOST:
    - BASE_ROUTE[http://localhost:3000/apps/remote](http://localhost:3000/apps/remote)
- REMOTE: [localhost:3001](http://localhost:3001/)

`CTRL + C` can only stop the host server. You can run `pnpm stop` to stop all services.
