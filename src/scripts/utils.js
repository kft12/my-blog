/**
 * 日記の一覧を表示用に加工する
 */
export function formatPosts(posts) {
    return posts
        // 作成日降順に並び替え
        .sort(
            (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
        )
        // タグを昇順に並び替え
        .map(
            post => {
                post.data.tags?.sort();
                return post;
            }
        )
    ;
}

/**
 * 日記の作成日をyyyyMM形式で取得
 * 月の0埋めあり
 */
export function getPostYm(post) {
    const month = (post.data.pubDate.getMonth()+1).toString().padStart(2, '0');
    return `${post.data.pubDate.getFullYear()}${month}`;
}

/**
 * yyyy年M月 → yyyyMM
 */
export function ymStrToYm(ymStr) {
    const year = ymStr.slice(0, 4);
    const month = ymStr.slice(-3).replace('年', '').replace('月', '').padStart(2, '0');
    return year + month;
}