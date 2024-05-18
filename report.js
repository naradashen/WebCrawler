function printReport(pages) {
    console.log("========")
    console.log("REPORT")
    console.log("========")
    const sortedPages = sortPages(pages)
    for (const sortedPage of sortedPages) {
        const url = sortedPage[0] // Corrected variable name to 'url'
        const hits = sortedPage[1]
        console.log(`Found ${hits} links to page: ${url}`)
    }
    console.log("========")
    console.log("END REPORT")
    console.log("========")
}

function sortPages(pages) {
    const pagesArr = Object.entries(pages)
    pagesArr.sort((a, b) => {
        const aHits = a[1] // Declared 'aHits' and 'bHits' as constants
        const bHits = b[1]
        return bHits - aHits // Fixed sorting order
    })
    return pagesArr
}

module.exports = { // Fixed the typo here from 'module.export' to 'module.exports'
    sortPages,
    printReport
}