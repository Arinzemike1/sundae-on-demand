import { rest } from 'msw';

export const handlers = [
    rest.get("http://localhost:3030", (req, res, ctx) => {
        return res(
            ctx.json([
                { name: 'Chocolate', imgaePath: '/images/chocolate.png' },
                { name: 'Vanilla', imgaePath: '/images/vanilla.png' }
            ])
        )
    })
]