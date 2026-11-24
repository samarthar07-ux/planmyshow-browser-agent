# Chrome extension

This is a Chrome Manifest V3 demo extension. Load this folder using `chrome://extensions` → Developer mode → Load unpacked.

It is deliberately restricted to the local mock site at `localhost:5500` and `127.0.0.1:5500`. If Live Server uses another port, update the `matches` and `host_permissions` entries in `manifest.json`, then reload the extension.
