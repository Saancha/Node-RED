module.exports = {
    // --- Server Configuration ---
    httpAdminRoot: '/admin',
    httpNodeRoot: '/',

    // --- Logging ---
    logging: {
        console: {
            level: 'info',
            metrics: false,
            audit: false
        }
    },

    // --- User Directory ---
    userDir: './',

    // --- Nodes Configuration ---
    nodesDir: './nodes',
    flowsFile: 'flows.json',

    // --- Editor Configuration ---
    editorTheme: {
        projects: {
            enabled: false
        }
    },

    // --- Security ---
    credentialSecret: 'your-secret-key',

    // --- Flow Configuration ---
    flowFile: 'flows.json',
    flowFilePretty: true,

    // --- Runtime Configuration ---
    functionGlobalContext: {
        // Add global context variables here
    },

    // --- Editor Configuration ---
    editorTheme: {
        // Customize the editor theme if needed
    },

    // --- Dashboard Configuration (if you're using the Node-RED dashboard) ---
    ui: {
        path: 'ui',
        middleware: function (req, res, next) {
            // Custom middleware for dashboard
            next();
        },
    },

    // --- Custom Settings ---
    // Add any additional settings specific to your project

    // --- HTTP Node Configuration ---
    httpNodeCors: {
        origin: '*',
        methods: 'GET,PUT,POST,DELETE'
    },

    // --- Enable Projects Feature ---
    projects: {
        enabled: false
    },
};
