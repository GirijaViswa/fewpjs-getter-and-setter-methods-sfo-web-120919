// Add your Circle class here
class Circle
{
    constructor(radius)
    {
        this.radius = radius;
    }

    get diameter()
    {
        return 2*this.radius;
    }

    get circumference()
    {
        return 2*Math.PI*this.radius;
    }

    get area()
    {
        return Math.PI*this.radius*this.radius;
    }

    set diameter(dia)
    {
        this.radius = dia/2;
    }

    set circumference(circum)
    {
        this.radius = circum/(2*Math.PI);
    }

    set area(are)
    {
        this.radius = math.sqrt(are/Math.PI)
    }
}