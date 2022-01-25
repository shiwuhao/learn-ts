interface ILoan {
    interest: number
}

class AgriLoan implements ILoan {
    interest: number;
    rebate: number;

    constructor(interest: number, rebate: number) {
        this.interest = interest;
        this.rebate = rebate;
    }
}