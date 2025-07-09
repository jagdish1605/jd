const asyncHandelar = (reqHand) => {
  return  (req,res,next) =>  {
        Promise.resolve(reqHand(req,res,next)).catch((err) => next(err))
    }
}
 
export {asyncHandelar}


//  const asyncHandelar = (fn) => async (res,req,next) => {
//     try {
//        await fn(res, req, next) 
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success:false,
//             Message: err.Message
//         })
//     }
//  }

