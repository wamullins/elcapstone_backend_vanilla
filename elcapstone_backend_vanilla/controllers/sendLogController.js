const { SendLog } = require("../models");

const addSendLog = async (req, res) => {
    try {
        const newSendLog = new SendLog(req.body);
        newSendLog.save();
        return res.json(newSendLog);
    } catch (e) {
        console.log(e);
        return res.send(e.message);
    }
};
const getSendLogs = async (req, res) => {
    try {
        const sendLogs = await SendLog.find({});
        console.log(sendLogs);
        return res.json(sendLogs);
    } catch (e) {
        console.log(e);
        return res.send(e.message);
    }
};
const getSendLogByID = async (req, res) => {
    try {
        const sendLog = await SendLog.findById(req.params.id);
        if (!sendLog) throw Error("sendLog not found");
        return res.json(sendLog);
    } catch (e) {
        console.log(e);
        return res.send(e.message);
    }
};
const deleteSendLogByID = async (req, res) => {
    try {
        const deletedSendLog = await SendLog.findByIdAndDelete(req.params.id);
        if (deletedSendLog) {
            return res.json(deletedSendLog);
        }
        return res.send("SendLog ID Not Found");
    } catch (e) {
        console.log(e);
        res.send(e.message);
    }
};
const updateSendLogByID = async (req, res) => {
    try {
        const updatedSendLog = await SendLog.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedSendLog) {
            return res.json(updatedSendLog);
        }
        return res.send("SendLog ID Not Found");
    } catch (e) {
        console.log(e);
        res.send(e.message);
    }
};

module.exports = {
    addSendLog,
    getSendLogs,
    getSendLogByID,
    deleteSendLogByID,
    updateSendLogByID,
};
