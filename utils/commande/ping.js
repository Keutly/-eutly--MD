import stylizedChar from "../utils/fancy.js"

export async function pingTest(client, message) {
    const remoteJid = message.key.remoteJid
    const start = Date.now()

    await client.sendMessage(remoteJid, { text: "📡 Pinging..." }, { quoted: message })

    const latency = Date.now() - start

    await client.sendMessage(remoteJid, {
        text: stylizedChar(
            `🚀𝗠𝗿᭄𝙺eutly🌀 Network\n\n` +
            `Latency: ${latency} ms\n\n` +
            `🌹⃝⃢𓂀𝗠𝗿᭄𝙺eutly🌀༆𓂀༒🌹`
        )
    }, { quoted: message })
}
