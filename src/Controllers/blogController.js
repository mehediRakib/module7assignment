
exports.create=async (req,res)=>{

    res.status(200).json({
        status:"success",
        data:"Can contain any information"
    })

}

exports.read=async(req,res)=>{
    res.status(200).json({
        status:"success",
        data:"Read data"
    })
}

exports.delete=async (req,res)=>{
    res.status(200).json({
        status:"success",
        data:"Successfully deleted data"
    })
}

exports.update=async (req,res)=>{
    res.status(200).json({
        status:"success",
        data:"successfully Updated"
    })
}

