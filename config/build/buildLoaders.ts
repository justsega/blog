import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";
const buildLoaders = ({isDev}: BuildOptions): webpack.RuleSetRule[] => {
    const
        typescriptLoader = {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
        cssLoaders = {
            test: /\.s[ac]ss$/i,
            use: [
                isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]'
                        },
                    }
                },
                "sass-loader",
            ],

        },
        svgLoader = {
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: [{ loader: '@svgr/webpack', options: { icon: true } }],
        },
        fileLoader = {
            test: /\.(png|jpe?g|gif|woff)$/i,
            use: [
                {
                    loader: 'file-loader',
                },
            ],
        };


    return [
        svgLoader,
        fileLoader,
        typescriptLoader,
        cssLoaders,
    ]
}

export default buildLoaders;