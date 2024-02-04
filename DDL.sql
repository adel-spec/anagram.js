SELECT
    t1.id,
    t1.name,
    t2.name AS parent_name
FROM
    table t1
LEFT JOIN
    table t2 ON t1.parent_id = t2.id
ORDER BY
    t1.id;