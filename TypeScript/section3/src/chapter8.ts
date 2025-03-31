// 서로소 유니온 타입
// 교집합이 없는 타입들로만 만든 유니온 타입 (number | string)

type ADMIN = {
    tag: 'ADMIN';
    name: string;
    kickCount: number;
};

type MEMBER = {
    tag: 'MEMBER';
    name: string;
    point: number;
};

type GUEST = {
    tag: 'GUEST';
    name: string;
    visitCount: number;
};

type User = ADMIN | MEMBER | GUEST;

function login(user: User) {
    switch (user.tag) {
        case 'ADMIN':
            console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
            break;
        case 'MEMBER':
            console.log(`${user.name}님 현재까지 ${user.point}포인트 모았습니다.`);
            break;
        case 'GUEST':
            console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`);
            break;
    }
}
