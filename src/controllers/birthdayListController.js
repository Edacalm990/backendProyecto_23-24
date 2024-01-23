const {BirthdayList, User} = require('../models/indexModels');
const { validName, validDate, catchAsync, response, gestionErrores, ClientError, generarHashpass, createDate } = require('../utils/indexUtils');


const addBirthday = async (req, res)=>{
    const fecha= createDate(req.body.date)
    if (!validName(req.body.name) || !fecha || !await User.exists({ _id: req.body.id })
    ) throw new ClientError("Los datos no son correctos", 400);

    const birthdayList = new BirthdayList({
        date: fecha,
        name: req.body.name,
        user: req.body.id,
    });

    const savedBirthday = await birthdayList.save();
    response(res, 200, savedBirthday)
    
}

const birthdays=async (req, res)=>{
    const cumples = await BirthdayList.find({user:req.body.id});
    // Responde con la lista de usuarios y código de estado 200 (OK)
    response(res, 200, cumples);
}

const birthdayDeleteId=async (req, res)=>{
    const id = req.params.id;
    const cumples = await BirthdayList.deleteOne({_id:id});
    response(res, 200, cumples);
}

const birthdayPut=async (req, res)=>{
    const filter = { _id: req.body.id};
    const updateText={};
    if(!!req.body.name) updateText['name']=req.body.name;
    if(!!req.body.date || createDate(req.body.date)){
        let dateAux=createDate(req.body.date)
        updateText['date']=dateAux;
    }
    let doc = await BirthdayList.findOneAndUpdate(filter, updateText);
    response(res, 200, doc);
}

module.exports = {
    //gestiono los errores con catchAsync
    addBirthday:catchAsync(addBirthday),
    birthdays:catchAsync(birthdays),
    birthdayDeleteId:catchAsync(birthdayDeleteId),
    birthdayPut:catchAsync(birthdayPut)
}
