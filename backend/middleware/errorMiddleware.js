const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`); // req.originalUrl is the url that was requested
    res.status(404);
    next(error);
}

const errorHandler = (err, req, res, next) => {
    // if the error is a 404, set the status code to 404, otherwise set it to 500
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;

    if (err.name === 'CastError' && err.kind === 'ObjectId') {
        statusCode = 404;
        message = 'Resource not found';
    }

    res.status(statusCode).json({
        message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    });
}

export { notFound, errorHandler };