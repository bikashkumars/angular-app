# Frontend

Frontend App 

## Development server

Run `ng serve --open` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further improvement

- Offline is not implemented
- Model file

## Production build

```shell
npm run build --prod
```

## Docker Build

```shell
docker build -t frontend:1.0.0 .
```

## Helm Deployment

```shell
helm install frontend.tar.gz -f
```