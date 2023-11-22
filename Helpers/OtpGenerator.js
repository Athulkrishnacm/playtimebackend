const otpGenerator = () => {
    return new Promise((resolve, reject) => { 
        let otp = '';
        for (let i = 0; i < 6; i++) {
            otp += Math.floor(Math.random() * 10);
        }
        console.log(otp, typeof otp);
        resolve(otp);  });
};

export default otpGenerator;
