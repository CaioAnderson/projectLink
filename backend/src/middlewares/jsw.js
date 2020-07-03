const { verifyJwt } = require('../helpers/jwt')

const checkJwt = (req, res, next) => {

    //Pegando a url da requisição
    const { url: path } = req;

    //Aqui lista as rotas que não precisam de autentificação
    const excludedPaths = ['/auth/sign-in', '/auth/sign-up'];

    // O "!!" transforma a sentença em verdadeiro ou falso
    const isExcluded = !!excludedPaths.find( (p) => p.startsWith(path));
    if(isExcluded) return next();

    let token = req.headers['authorization'];
    token = token ? token.slice(7, token.length) : null;
    
    // Verificação do token
    if (!token) {
        return res.jsonUnauthorization(null, 'Invalid Token');
    }

    try {
        const decoded = verifyJwt(token);
        req.accountId = decoded.id;
        next();

    } catch (error) {
        return res.jsonUnauthorization(null, 'Invalid Token');

    }

   
}

module.exports = checkJwt;