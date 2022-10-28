# laravel-nova-types
An experimental Typescript definition package for Laravel Nova

## Installation

```bash
npm i -D laravel-nova-types
```

```typescript
import Tool from './pages/Tool.vue'
import type { Nova } from "laravel-nova-types"

const Nova: Nova;

Nova.booting((app, store) => {
    Nova.inertia('Tool', Tool)
})


```