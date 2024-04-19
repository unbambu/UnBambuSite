import { Config } from  './config';

export interface ConfigState {
    isLoaded: boolean;
    data: Config | null;
}
