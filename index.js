import express from "express";
import { ruleFactory } from '@elite-libs/rules-machine';

const app = express();
const PORT = 3001;

const tempRules = [
    { "if": "BankName == \"sbi\"", "then": "isApplicable = \"true\"" },
    { "if": "BankName == \"icici\"", "then": "isApplicable = \"true\"" },
    { "if": "paymentType == \"emi\"", "then": "isApplicable = \"true\"" },
    { "if": "paymentType == \"fullSwipe\"", "then": "isApplicable = \"true\"" },
    { "if": "cardType == \"credit\"", "then": "isApplicable = \"true\"" },
    { "if": "cardType == \"debitCard\"", "then": "isApplicable = \"true\"" },
    { "if": "minimumPurchaseValue == 50", "then": "isApplicable = \"true\"" },
    { "return": "isApplicable" }
];

const validateRules = (filterCriteria) => {
    const rule = ruleFactory(tempRules);
    return rule(filterCriteria) === "true";
};

console.log(validateRules({ "transactiontype": "non-emi" }));

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});