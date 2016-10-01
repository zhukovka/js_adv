function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every(function (objSub) {
            return goodUsers.some (function (objUs) {
                return objUs == objSub;
            })
        });
    };
}

module.exports = checkUsersValid;