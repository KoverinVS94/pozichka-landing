import * as React from "react";
import {
    Calculator as ReactCreditCalculator,
    CalculatorControlWrapper,
    CalculatorSummaryButton,
    CalculatorControlTypes,
    CalculatorLabelTypes,
    CalculatorButton,
    CalculatorSlider,
    CalculatorInput,
    CalculatorLabel
} from "react-credit-calculator";

const hashClasses = require("main.scss");

import { Calculator } from "../../Calculator";

export class SectionMain extends React.Component {

    public render(): React.ReactNode {
        return (
            <React.Fragment>
                <div className={hashClasses["section-main"]}>
                    <div className={hashClasses["container"]}>
                        <div className={hashClasses["overlay"]}>
                            <h1 className={hashClasses["title"]}>
                                Кредиты на карту до 4 000 гривен
                            </h1>
                            <p className={hashClasses["sub-title"]}>
                                Получите деньги в банке Украины или на карту за 7 минут
                            </p>
                        </div>
                    </div>
                    <div className={hashClasses["wrap"]}>
                        <div className={hashClasses["container"]}>
                            <div className={hashClasses["calc"]}>
                                <Calculator />
                            </div>
                            <div className={hashClasses["register"]}>
                                <div className={hashClasses["credit-info"]}>
                                    <div className={hashClasses["total-wrap"]}>
                                        <CalculatorControlWrapper type={CalculatorControlTypes.amount}>
                                            <div className={hashClasses["form-group"]}>
                                                <label className={hashClasses["form-label"]}>
                                                    Сумма кредита:
                                                </label>
                                                <div
                                                    className={`
                                                        ${hashClasses["input-group"]}
                                                        ${hashClasses["total-sum"]}
                                                    `}
                                                >
                                                    <CalculatorInput
                                                        type="number"
                                                        className={hashClasses["form-control"]}
                                                    />
                                                </div>
                                            </div>
                                        </CalculatorControlWrapper>
                                        <CalculatorControlWrapper type={CalculatorControlTypes.term}>
                                        <div className={hashClasses["form-group"]}>
                                            <label className={hashClasses["form-label"]}>
                                                Срок кредита:
                                            </label>
                                            <div
                                                className={`
                                                    ${hashClasses["input-group"]}
                                                    ${hashClasses["total-term"]}
                                                `}
                                            >
                                                <CalculatorInput
                                                    type="number"
                                                    className={hashClasses["form-control"]}
                                                />
                                            </div>
                                        </div>
                                        </CalculatorControlWrapper>
                                    </div>
                                    <div className={hashClasses["time-receipt"]}>
                                        <span>Получить деньги в:</span>
                                        <span>15:45</span>
                                    </div>
                                </div>
                                <div className={hashClasses["form-register"]}>
                                    <div className={hashClasses["form-wrap"]}>
                                        <div className={`${hashClasses["half"]} ${hashClasses["half-left"]}`}>
                                            <div className={hashClasses["form-group"]}>
                                                <input
                                                    type="text"
                                                    className={hashClasses["form-control"]}
                                                    placeholder="Фамилия"
                                                />
                                            </div>
                                            <div className={hashClasses["form-group"]}>
                                                <input
                                                    type="text"
                                                    className={hashClasses["form-control"]}
                                                    placeholder="Имя"
                                                />
                                            </div>
                                            <div className={hashClasses["form-group"]}>
                                                <input
                                                    type="text"
                                                    className={hashClasses["form-control"]}
                                                    placeholder="Отчество"
                                                />
                                            </div>
                                        </div>
                                        <div className={`${hashClasses["half"]} ${hashClasses["half-right"]}`}>
                                            <div className={hashClasses["form-group"]}>
                                                <input
                                                    type="email"
                                                    className={hashClasses["form-control"]}
                                                    placeholder="Email"
                                                />
                                            </div>
                                            <div className={hashClasses["form-group"]}>
                                                <input
                                                    type="tel"
                                                    className={hashClasses["form-control"]}
                                                    placeholder="Телефон"
                                                />
                                            </div>
                                            <div className={hashClasses["form-group"]}>
                                                <input
                                                    type="text"
                                                    className={hashClasses["form-control"]}
                                                    placeholder="SMS-пароль"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={hashClasses["confirm"]}>
                                        <div className={hashClasses["checkbox-group"]}>
                                            <button className={hashClasses["register-checkbox"]} />
                                            <p>Даю <a href="#">согласие на обработку моих личных данных</a></p>
                                        </div>
                                        <button className={hashClasses["btn-action"]}>Зарегистрироваться</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}