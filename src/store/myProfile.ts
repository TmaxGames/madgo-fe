import { atom } from "recoil";

export const myProfileState = atom({
    key: "myProfileState",
    default: {
        uuid: 0,
        email: "",
        nickname: "",
        rank: "",
        rankClass: "",
        gamePoint: "",
        gameMoney: "",
        record: "",

    }
})


