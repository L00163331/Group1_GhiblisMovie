import heapq
def solve(A,B):
    diff = sum(A) - sum(B)
    if diff==0:
        return 0
    elif diff<0:
        # sum(B) is more
        min_heap, max_heap = A,B
    else:
        # Sum(A) is more
        min_heap, max_heap = B,A
    
    diff = abs(diff)
    heapq.heapify(min_heap)
    max_heap = [-i for i in max_heap]
    heapq.heapify(max_heap)

    count = 0
    val = 0
    ## Idea : Greedy approach
    # We take the min_element from the set with lesser sum, and the max_element from set with greater sum
    # The min_element would be able to contribute a total of (6-min_element)
    # The max_element would be able to contribute a total of (max_element-1)
    # We compare these two, to determine which can contribute more towards reducing the diff
    # We update the diff , and change the (min_element or max_element) in the corresponding heap
    # We keep doing this till either our min_heap becomes all 6s or  max_heap becomes all 1s
    while val<diff:
        val_from_min_heap = min_heap[0]
        val_from_max_heap = abs(max_heap[0])
        if val_from_min_heap==6 and val_from_max_heap==1:
            # Both sets have reached their extent
            return -1

        diff_if_min = 6-val_from_min_heap # If say we get 3, we can increase only upto 6, so diff would be 3
        diff_if_max = val_from_max_heap-1 # If say we get 5, we can reduce it to max 1, so diff of 4
        count+=1
        val+= max(diff_if_min, diff_if_max)
        if diff_if_min>diff_if_max:
            heapq.heappop(min_heap)
            heapq.heappush(min_heap,6)
        else:
            heapq.heappop(max_heap)
            heapq.heappush(max_heap,-1)
    
    return count

print(solve([2,4],[6,1,1,1,1,1,1,1,1,1,1,1,1])) # Returns -1
print(solve([5],[1,1,6])) # Returns 1