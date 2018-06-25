import * as React from "react";

const hashClasses = require("main.scss");

import { OnMobile, OnTabletDesktop } from "react-breakpoint";

export class SectionService extends React.Component {

    public render(): React.ReactNode {
        return (
            <React.Fragment>
                <div className={`${hashClasses["section"]} ${hashClasses["section-service"]}`}>
                    <div className={hashClasses["container"]}>
                        <div className={hashClasses["fast-credit-info"]}>
                            <h2 className={hashClasses["title"]}>
                                Получи быстрый кредит на карту <br /> всего за 7 минут
                            </h2>
                            <p className={hashClasses["sub-title"]}>
                                При появлении финансовых трудностей, вы в любое время
                                можете подать заявку на кредит в наше сервисе,
                                независимо от цели, наличия справки с работы, справки о доходах.
                            </p>
                                <button className={hashClasses["btn-action"]}>
                                    <OnTabletDesktop>
                                        Оформить заявку на кредит
                                    </OnTabletDesktop>
                                    <OnMobile>
                                        Оформить заявку
                                    </OnMobile>
                                </button>
                        </div>
                        <div className={hashClasses["service-help-info"]}>
                            <h2 className={hashClasses["title"]}>
                                Сервис финансовой помощи
                            </h2>
                            <p>
                                При появлении финансовых трудностей,
                                вы в любое время можете подать заявку
                                на кредит в наше сервисе, независимо
                                от цели, наличия справки с работы,
                                справки о доходах и кредитной истории.
                            </p>
                            <p>
                                Мы гарантируем, что вся кредитная информация
                                прозрачна и указана в Договоре. В персональном
                                личном кабинете вы можете проверить статус и
                                увидеть полную стоимость вашего кредита
                                по состоянию на текущий момент.
                                Мы гарантируем, что вся кредитная
                                информация прозрачна и указана в Договоре.
                            </p>
                            <p>
                                В вашем личном кабинете <strong>вы можете проверить</strong>:
                            </p>
                            <ul>
                                <li>Статус заявки,</li>
                                <li>Историю кредитов,</li>
                                <li>Финансовые операции,</li>
                                <li>Документы.</li>
                            </ul>
                            <p>
                                При появлении финансовых трудностей,
                                вы в любое подать заявку на кредит в
                                наше сервисе, независимо от цели,
                                наличия справки с работы, справки
                                о доходах и кредитной истории.
                            </p>
                            <p>
                                <strong>
                                    Кредиты предоставляются компанией «Денежный Бум»,
                                    зарегистрированной в ГРФУ
                                    (Государственном реестре финансовых учреждений)
                                    распоряжением НКРРФП №1406 от 15 мая 2014 года,
                                    под регистрационном номером 16102980.
                                </strong>
                            </p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
