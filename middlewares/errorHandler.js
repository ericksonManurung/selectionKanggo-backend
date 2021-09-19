const errorHandler = (err,req,res,next) => {
    console.log('name ====>', err.name)
    console.log('msg ====>', err.message)

    let errStatus
    let errMsg = []

    switch (err.name) {
        case 'SequelizeValidationError':
            errStatus = 400
            errMsg = err.errors ? err.errors.map((e) => e.message) : []
            break;
        case 'MISSING_ACCESS_TOKEN':
            errStatus = 401
            errMsg.push('Access token not found')
            break;
        case 'INVALID_ACCESS_TOKEN':
            errStatus = 401
            errMsg.push('Access token invalid')
            break;
        case 'MISSING_USER':
            errStatus = 401
            errMsg.push('User tidak ditemukan')
            break;
        case 'AUTHORIZATION_NOT_VALID':
            errStatus = 401
            errMsg.push('Anda tidak punya akses. silahkan hubungi admin')
            break;
        case 'LOGIN_VALIDATION':
            errStatus = 401
            errMsg.push('Username and Password can not be null')
            break;
        case 'LOGIN_FAIL':
            errStatus = 401
            errMsg.push('Username and password false')
            break;
        case 'FORMAT_PASSWORD_FALSE':
            errStatus = 401
            errMsg.push('Character for password minimal 8')
            break;
        case 'FORMAT_EMAIL_FALSE':
            errStatus = 401
            errMsg.push('Format email must be ex: john@mail.com')
            break;
        case 'DATA_NOT_FOUND':
            errStatus = 404
            errMsg.push('Data not found')
            break;
        case 'STOCK_NOT_ENOUGH':
            errStatus = 404
            errMsg.push('goods at stock not enough')
            break;
        case 'NO_PENDING_ORDER':
            errStatus = 404
            errMsg.push('you dont have pending order')
            break;
        case 'SequelizeUniqueConstraintError':
            errStatus = 409
            errMsg.push('email already registered')
            break;
        default:
            errStatus = 500
            errMsg.push('Internal server error')
    }

    res.status(errStatus).json({success: false, errMsg})
}

module.exports = errorHandler  