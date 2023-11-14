import buildWebpackConfig from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildPaths } from "./config/build/types/config";
import path from "path";
import webpack from "webpack";

export default (env: BuildEnv) => {
    console.log(env)
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),

    }

    const mode = env.mode || 'development',
          PORT = env.port || 3000,
          isDev = mode === 'development';

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT
    });

    return config;
};