const MemberValidation = () => {
    let premiumUser = false;
    return (
        <div>{ (premiumUser === true) ? "Thank you for being a premium member" : "Upgrade to premium to enjoy exclusive features"}</div>
    )
}

export default MemberValidation;