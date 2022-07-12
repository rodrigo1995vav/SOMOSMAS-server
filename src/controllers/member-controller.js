const memberService = require("../services/member-service")
const fileServices = require("../services/fileServices");

const updateMember = async (req, res, next) => {
    try {
        const id = req.params.id
        const image = await fileServices.checkFileAndUpload(req.file)
        const memberSaved = await memberService.updateMember({
            ...req.body,
            image,
            id
        })
        res.status(201).json(memberSaved)
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports ={
    updateMember
}