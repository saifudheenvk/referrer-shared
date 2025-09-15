# @saifudheenvk/referrer-shared

Shared types, interfaces, and utilities for the Referrer application.

## Installation

```bash
npm install @saifudheenvk/referrer-shared
```

## Usage

### User Interfaces

```typescript
import { IUser, IUserRole, RoleType, IAuth } from '@saifudheenvk/referrer-shared';

const user: IUser = {
  id: '123',
  email: 'user@example.com',
  firstName: 'John',
  lastName: 'Doe',
  roles: [RoleType.USER],
  isActive: true,
  createdAt: new Date(),
  updatedAt: new Date()
};
```

### Page Interfaces

```typescript
import { Page, Tile, PageTypes, TileTypes } from '@saifudheenvk/referrer-shared';

const page: Page = {
  id: 'page-1',
  title: 'Dashboard',
  type: PageTypes.DASHBOARD,
  tiles: [
    {
      id: 'tile-1',
      type: TileTypes.CHART,
      title: 'Analytics',
      config: {}
    }
  ]
};
```

## Available Exports

### User Types
- `IUser` - User interface
- `IUserRole` - User role interface
- `IPermissionGroup` - Permission group interface
- `IPermission` - Permission interface
- `RoleType` - Role type enum
- `IUserDocument` - MongoDB user document
- `IAuth` - Authentication interface
- `ICreatUserPayload` - User creation payload

### Page Types
- `PageTypes` - Page type enum
- `TileTypes` - Tile type enum
- `Page` - Page interface
- `Tile` - Tile interface
- `TileType` - Tile type interface
- `TileConfig` - Tile configuration interface
- `PageType` - Page type interface
- `PageConfigKey` - Page configuration key interface
- `StyleConfig` - Style configuration interface

## Development

### Building the Package

```bash
npm run build
```

This will:
1. Build CommonJS version (`build/cjs/`)
2. Build ESM version (`build/esm/`)
3. Generate TypeScript declarations (`build/src/`)
4. Copy package.json to build directory

### Publishing

```bash
npm publish
```

## License

MIT
