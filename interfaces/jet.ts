export interface Jet {
    id?: number,
    stat1: string,
    value1: number,
    stat2: string,
    value2: number,
    bonus: number,
    reussites: number,
    soif: number,
    eveil_soif: number,
    compulsion: number,
    eveil_compulsion: number,
    des?: Array<number>,
    des_json?: string,
    timestamp?: number,
    perso_id?: number
}