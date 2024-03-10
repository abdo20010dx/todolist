import { DataSource } from "typeorm";
import { join } from "path";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { serverConfig } from "src/config/config";

export const ormOptions: TypeOrmModuleOptions = {
    type: "mysql",
    database: serverConfig.database,
    username: serverConfig.database_user,
    password: serverConfig.database_password,
    host: serverConfig.host_database,
    port: 3306,
    entities: [
        // '**/**/*.entity{.ts, .js}',
        // join(__dirname, "**", "*.entity.{ts,js}"),
        join(__dirname, "..", "**", "**", "entities", "*.{ts,js}"),

    ],
    migrationsTableName: "migrations",
    migrations: [
        // `**/database/migrations/*{.ts,.js}`
        join(__dirname, "**", "database", "migrations", "*{.ts,.js}"),
    ],
    extra: {
        charset: "utf8mb4_unicode_ci",
    },
    synchronize: serverConfig.RUN_MIGRATIONS,
    logging: true
    // namingStrategy: new SnakeNamingStrategy(), // Here you'r using the strategy!
};