class Notifier {
    private static instance: Notifier = new Notifier({})

    private options: any = {}

    constructor(options: any) {
        this.setOptions(options)
    }

    public setOptions(options: any): Notifier {
        this.options = { ...this.options, ...options }

        return this
    }

    public error(message: string): Notifier {
        this.setOptions({ message })

        return this
    }

    public static configure(options: any): void {
        this.getInstance().setOptions(options)
    }

    public static error(message: string): Notifier {
        return Notifier.getInstance().error(message)
    }

    private static getInstance(): Notifier {
        if (Notifier.instance === undefined) {
            Notifier.instance = new Notifier({})
        }

        return Notifier.instance
    }
}

;(window as any).Notifier = Notifier

export default Notifier
