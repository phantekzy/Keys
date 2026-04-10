import type { KeyConfig, KeyStatus } from "../types/keyboard";

interface Props {
    config: KeyConfig;
    status: KeyStatus;
}

export const Key = ({ config, status }: Props) => {
    return (
        <div
            className={`key-cap ${status}`}
            style={{ flexGrow: config.width || 1, flexBasis: 0 }}
        >

        </div>
    )
}
