function appInner()
{
    console.log(`Log record: ${new Date()}`);
    setTimeout(appInner, 3000);
}

appInner();