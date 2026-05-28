class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        interface Car { position: number; speed: number; };
        const cars: Car[] = [];
        for (let i = 0; i < position.length; i++)
            cars.push({ position: position[i], speed: speed[i] });
        cars.sort((a, b) => b.position - a.position);
        const stack: number[] = [];
        for (const car of cars) {
            const time = (target - car.position) / car.speed;
            if (stack.length === 0 || time > stack[stack.length - 1])
                stack.push(time);
        }
        return stack.length;
    }
}
