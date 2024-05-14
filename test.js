const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);

const Employee = require('./employee');
const Manager = require('./manager');

describe('The calculateBonus(multiplier) method:', () => {
    let hobbes;
    let calvin;
    let susie;
    let lily;
    let clifford;
    beforeEach(() => {
        hobbes = new Manager('Hobbes', 1000000, 'Founder');
        calvin = new Manager('Calvin', 130000, 'Director', hobbes);
        susie = new Manager('Susie', 100000, 'TA Manager', calvin);
        lily = new Employee('Lily', 90000, 'TA', susie);
        clifford = new Employee('Clifford', 90000, 'TA', susie);

    });

    describe('Calculate bonus for each employee', () => {
        context('1. If Hobbes gets a multiplier of 0.05', () => {
            it('their bonus will be $70,500', () => {
                expect(hobbes.calculateBonus(0.05)).to.equal(70500)
            })
        })

        context('2. If Calvin gets a multiplier of 0.05', () => {
            it('their bonus will be $20,500', () => {
                expect(calvin.calculateBonus(0.05)).to.equal(20500)
            })
        })

        context('3. If Susie gets a multiplier of 0.05', () => {
            it('their bonus will be $14,000', () => {
                expect(susie.calculateBonus(0.05)).to.equal(14000)
            })
        })

        context('4. If Lily gets a multiplier of 0.05', () => {
            it('their bonus will be $4,500', () => {
                expect(lily.calculateBonus(0.05)).to.equal(4500)
            })
        })

        context('5. If Clifford gets a multiplier of 0.05', () => {
            it('their bonus will be $4,500', () => {
                expect(clifford.calculateBonus(0.05)).to.equal(4500)
            })
        })
    });





});
