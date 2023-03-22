
export const migrations = {
    0.2: (state: any) => {
        // migration to keep only device state
        console.log('Migration Running!')
        return {
            ...state,
            config: {
                remember: true,
                apiKey: "",
                theme: "dark"
            }
        }
    },

}
