const routes = (handler) =>[
    {
        method:'POST',
        handler: handler.postAuthenticationHandler,
        path:'/authentication',
    },
    {
        method:'PUT',
        handler: handler.putAuthenticationHandler,
        path:'/authentication',
    },
    {
        method:'DELETE',
        handler: handler.deleteAuthenticationHandler,
        path:'/authentication',
    }
]

module.exports = routes