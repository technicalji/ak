const Project = require("../model/projectSchema");

const saveProject = async (req, res) => {
    const {name, sub_description, description} = req.body;
    const file = req.file.filename;
    try {
        if(name && sub_description && description){
            const project = new Project({
                name,
                description,
                sub_description,
                image:file
            });
            const data = await project.save();
            return(
                res.status(201).json({
                    message:"Project Save",
                    data
                })
            )
        }else{
            return(
                res.status(200).json({
                    message: "Project not Save"
                })
            )
        }
    } catch (error) {
        return(
            res.status(200).json({
                error
            })
        )
    }
};
const getPrject = async (req, res) => {
    const data = await Project.find();
    return(res.status(200).json({
        message: "All project Details",
        data
    }))
}
module.exports = {saveProject,getPrject};