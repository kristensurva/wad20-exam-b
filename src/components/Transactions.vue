<template>
    <table>
        <tr>
            <td>From / To</td>
            <td>Amount</td>
            <td>Currency</td>
        </tr>
        <tr v-for="(item, index) in transactions"
            class="row"
            :class="{income: item.type === 'income', spending: item.type === 'spending'}"
            :key="index"
        >
            <td>
                <span v-if="item.type === 'income'">{{item.from}}</span>
                <span v-else>{{item.to}}</span>
            </td>
            <td>
                <span v-if="item.type === 'income'">+</span>
                <span v-else>-</span>
                <span> {{item.amount}}</span>
            </td>
            <td>
                <span>{{item.currency}}</span>
            </td>
        </tr>
        <tr>
            <td colspan="3" style="text-align: right;">
                <span>Balance: <span id="balance">{{balance}}</span> EUR</span>
            </td>
        </tr>
    </table>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            transactions: Array
        },
        computed: {
            balance: function () {
                let balance = 0;

                for (let i of this.transactions) {
                    if (i.type === 'income') {
                        balance += i.amount
                    } else {
                        balance -= i.amount
                    }
                }

                return balance;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    table {
        width: 50%;
        margin: 0 auto;
    }

    tr.income {
        color: #42b983;
    }

    tr.spending {
        color: #b9271a;
    }
</style>
