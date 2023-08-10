const OGInvite = ""
const queryString = window.location.search;
var openingInvite = false
if (queryString != null && queryString != "") {
    const urlParams = new URLSearchParams(queryString);
    const inviteParam = urlParams.get('ref') || urlParams.get('invite');
    if (typeof (inviteParam) == "string") {
        openingInvite = true
        window.open(`https://discord.gg/${inviteParam}`, '_self')
    }
}
if (!openingInvite) {
    window.open(`https://discord.gg/${OGInvite}`, '_self');
}
