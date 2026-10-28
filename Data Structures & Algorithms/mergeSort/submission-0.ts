class Solution {
    mergeSort(pairs: Pair[]): Pair[] {
        if (pairs.length <= 1) return pairs;

        let mid = Math.floor(pairs.length / 2);

        const left = pairs.slice(0, mid);
        const right = pairs.slice(mid);

        return this.merge(this.mergeSort(left), this.mergeSort(right));
    }

    merge(left: Pair[], right: Pair[]): Pair[] {
        const res: Pair[] = [];
        let i = 0, j = 0;

        while (i < left.length && j < right.length) {
            if (left[i].key <= right[j].key) {
                res.push(left[i++]);
            } else {
                res.push(right[j++]);
            }
        }

        return [...res, ...left.slice(i), ...right.slice(j)];
    }
}