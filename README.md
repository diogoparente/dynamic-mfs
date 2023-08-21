# @dynamic-mfs

@dynamic-mfs is a project that aims to aggregate different approaches on dynamic (microfrontend) remote loading.

### What is dynamic remote loading?

Dynamic remote loading is just another step beyond strategies like module federation, where you can present external apps as if they were part of your app context.

The key difference is that, with dynamic remote loading, you can present an ever-changing external app seamlessly, instead of using the same version of the desired microfrontend over and over again.

This means that, without re-deploying your host app, or "smashing" your previous remote bundle with some new code, you can let your host app consume the new remote version on the fly.

### Examples

Each proposal for solving this approach should be documented inside each project in the `README.md` file folder with instructions and documentation.

You can find the template to follow in `README_TEMPLATE.md`
