// void
function voidExam() {
    function voidFunc(): void {
        console.log('hi');
    }

    let voidVar: void = undefined;
}

// 객체 타입의 호환성
type Animal = {
    name: string;
    color: string;
}; // 슈퍼

type Dog = {
    name: string;
    color: string;
    breed: string;
}; // 서브

let animal: Animal = {
    name: '기린',
    color: 'yellow',
};

let dog: Dog = {
    name: '마루',
    color: 'white',
    breed: '말티즈',
};

animal = dog;
// dog = animal;
