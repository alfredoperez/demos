System.register([], function(exports_1) {
    "use strict";
    var CONFIG;
    return {
        setters:[],
        execute: function() {
            exports_1("CONFIG", CONFIG = {
                baseUrls: {
                    config: 'commands/config',
                    resetDb: 'commands/resetDb',
                    characters: 'api/characters.json',
                    vehicles: 'api/vehicles.json'
                }
            });
        }
    }
});
//# sourceMappingURL=config.js.map