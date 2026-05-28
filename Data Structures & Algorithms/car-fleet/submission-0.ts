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
        const stack: Car[] = [];
        for (const car of cars) {
            if (stack.length === 0) {
                stack.push(car);
            } else {
                const top = stack[stack.length - 1];
                const topTime = (target - top.position) / top.speed;
                const carTime = (target - car.position) / car.speed;
                if (carTime > topTime) stack.push(car);
            }
        }
        return stack.length;
    }
}
